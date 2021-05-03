import React from 'react'
import { useSelector } from 'react-redux';

export default function TimeLogic({ time, postState, userAddress, postAddress}) {
    const user = useSelector((state) => state.user);
    const relativeTimeLogic = (string) => {
        let relativeTime = string.split(":")
        if (Number(relativeTime[0]) === 1 && Number(relativeTime[1] < 55)) {
            return `An hour and ${relativeTime[1]} minutes away from you`
        }
        if (Number(relativeTime[0]) > 1) {
            return `Over ${relativeTime[0]} hours and ${relativeTime[1]} minutes (${postState}) away from you`
        }
        if (Number(relativeTime[0]) === 0 && Number(relativeTime[1] > 54)) {
            return "About an hour away from you"
        }
        if (Number(relativeTime[0]) === 0 && Number(relativeTime[1] < 55)) {
            return `${relativeTime[1]} minutes away from you`
        }
    }
    if (user && userAddress === postAddress) {
        return `This is your post`
    }

    if(!time) {
        return ""
    }

    return (
        <div>
            <p>{relativeTimeLogic(time)} </p>
        </div>
    )
}
