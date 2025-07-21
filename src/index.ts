import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

async function insertUser(email:string,password:string,firstName:string,lastName:string){
    const res =await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);

}

insertUser("test@gmail.com","1234","somefirstname","somelastname");


interface UpdateParams { 
    firstName: string;
    lastName: string;
  }
  

  async function updateUser(email: string, {
    firstName,
    lastName
  }: UpdateParams) {
    const result = await prisma.user.update({
      where: { email: email }, 
      data: { 
        firstName,
        lastName
      }
    })
    console.log(result);
  }
  
//   updateUser("test@gmail.com", {
//     firstName: "newfirstname",
//     lastName: "newlastname"
//   });