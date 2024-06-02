import { mysqlClient } from "@/utils/mysqlClient";
import { json } from "stream/consumers";

// export async function GET(message) {
//   if (!mysqlClient.initialized) {
//     await mysqlClient.initialize();
//   }

//   const result = await mysqlClient.connection.query("select * from user;");

//   const rows = result[0];
//   for (const rowsObj of rows) {
//     console.log(rowsObj);
//   }

//   return new Response(JSON.stringify(rows));
// }

export async function GET(message) {
  if (!mysqlClient.initialized) {
    await mysqlClient.initialize();
  }

  const result = await mysqlClient.connection.query("select * from user;");

  const rows = result[0];
  for (const rowsObj of rows) {
    console.log(rowsObj);
  }

  return new Response(JSON.stringify(rows));
}

export async function POST(message) {
  if (!mysqlClient.initialized) {
    await mysqlClient.initialize();
  }
  const value = await message.body.getReader().read();
  const newValue = new TextDecoder().decode(value.value);
  console.log(value.value);
  console.log(JSON.parse(newValue));

  const userInfo = JSON.parse(newValue).condition;
  console.log(userInfo);

  const result = await mysqlClient.connection.query(
    `select * from user where email='${userInfo.email}'`
  );
  const succ = true;
  const fail = false;

  const savedInfo = result[0][0];
  console.log(savedInfo, "savedInfo");
  if (!savedInfo) {
    return new Response(
      JSON.stringify({ status: fail, message: "请您先注册！" })
    );
  } else {
    if (userInfo.password === savedInfo.password) {
      return new Response(
        JSON.stringify({ status: succ, message: "登陆成功！" })
      );
    } else
      return new Response(
        JSON.stringify({ status: fail, message: "密码错误！" })
      );
  }
}
