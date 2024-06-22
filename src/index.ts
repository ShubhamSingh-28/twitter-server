import { initserver } from "./app";

async function init() {
    const app = await initserver()
    app.listen(8000,()=>{console.log(`server Started at PORT : 8000`);
    })
}
init()

