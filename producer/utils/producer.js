import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: 'my-app',
  //your kafka container port
  brokers: ['localhost:9092', 'localhost:9092']
})

const producer = kafka.producer()

  
  export const run = async (res) => {
  
      await producer.connect();
      await producer.send({
        topic: 'first_kafka_topic',
        //convert value to a JSON string and send it
        messages: [{ value: JSON.stringify(res) }],
  
  
      });
      console.log('Message sent successfully', res)
  
    }
  
  
  
  
//   export const run = async () => {
//     // To produce a message, we first need to connect
//     await producer.connect()
  
//     //Here, you can send whatever you want
//     await producer.send({
//       topic: 'Your_kafka_topic',
//       messages: [
//         { value: 'Hello Consumer I hope you are fine!' },
//       ],
//     })
//   console.log('Message sent successfully')
  
//   }