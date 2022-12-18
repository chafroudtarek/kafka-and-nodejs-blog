import { Kafka } from 'kafkajs';
import { v4 as uuidv4 } from 'uuid';
import {File}   from '../models/File.js';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'kafka' })

export const run = async () => {
  await consumer.connect()
  await consumer.subscribe({topic: 'first_kafka_topic', fromBeginning: true })
  await consumer.run({
    eachMessage: async ({  message }) => {
      console.log("****************** Arrived in Consumer ******************")
      const obj = JSON.parse(message.value);
      console.log("our object",obj);
      //this part to create our user file
      try {
        const newFile = new File({
            userRef :uuidv4(),
            username: obj.username,
        });
        const response = await newFile.save();
          if (response) {
            console.log("File created successfully")
            console.log("Executing wihout problems")
          }
      } catch (e) {
       console.log("catch : " + e)
      }
   }, })}



//   await consumer.run({
//     eachMessage: async ({partition, message }) => {
//       console.log({
//         partition,
//         offset: message.offset,
//         value: message.value.toString(),
//       });
//     }
// })