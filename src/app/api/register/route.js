import { mysqlClient } from "@/utils/mysqlClient";
import { NextResponse } from "next/server";

/**
 * @param {NextRequest} req
 */
export async function GET(req) {
  if (!mysqlClient.initialized) {
    await mysqlClient.initialize();
  }

  const result = await mysqlClient.connection.query("select name from user");

  return new NextResponse(
    JSON.stringify({
      users: result[0],
    })
  );
}

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
  if (!mysqlClient.initialized) {
    await mysqlClient.initialize();
  }

  const value = await req.body.getReader().read();
  const newValue = new TextDecoder().decode(value.value);

  const body = JSON.parse(newValue);

  const type = body.type;
  if (type === "UPDATE") {
    const { id, username: name, email, password } = body;

    console.log(id, name, email, password);

    const result = await mysqlClient.connection.query(
      ` update user 
        set name="${name}", email="${email}", password="${password}"
        where id = ${id}
      `
    );

    console.log(result);

    return new NextResponse();
  } else {
    const name = body?.name;
    const result = await mysqlClient.connection.query(
      'select * from user where name="' + name + '"'
    );
    return new NextResponse(JSON.stringify(result[0]));
  }
}
