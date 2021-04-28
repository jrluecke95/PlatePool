const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs')


async function s3Upload(file, folder='default') {
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: 'us-east-1',
  })
  const fileStream = fs.readFileSync(file.path);
  const command = new PutObjectCommand({
    Bucket: 'platepool',
    Key: `${folder}/${file.filename}`,
    Body: fileStream
  })
  try {
    const data = await client.send(command)
    return `https://platepool.s3.amazonaws.com/${folder}/${file.filename}`
  } catch (err) {
    console.log('Error', err)
    throw err;
  }
}

module.exports = s3Upload;