import client from "./pgClient"


export function GET(message: Request) {
    let result = {};
    
    client.query("SELECT * FROM user", 
    (err, res) => {
        if(err) throw err;
        client.end();
        result = {
            status: 200,
            message: "数据查询成功",
            data: res.rows,
            dataCount: res.rowCount
        }
    });

    return new Response(JSON.stringify(result))
}