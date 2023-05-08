interface Data {
  name: string
}

const data:Data  = {
  name : "hello world"
}

export async function GET(request: Request) {
  return new Response(data.name)
}
