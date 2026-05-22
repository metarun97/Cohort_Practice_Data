const autoCannon = require("autocannon");

const apis = [
  "http://localhost:3000/",
  "http://localhost:3001/about",
  "http://localhost:3002/contact",
]

function runTest(url) {
  return new Promise((resolve) => {
    const result = { url, success: 0 }

    const instance = autoCannon({ url, connections: 300, duration: 60 })

    instance.on("response", (_, statusCode) => {
      if (statusCode >= 200 && statusCode < 300) {
        result.success++;
      }
    })
    instance.on("done", () => resolve(result))
  })
}


async function main() {
  // Run all the apis at same time:-
  const results = await Promise.all(apis.map(runTest))

  // Sum of only successfull requrests:-
  const totalSuccess = results.reduce((acc, r) => acc + r.success, 0)

  console.log("\n==== Total Success Requests====")
  console.log(totalSuccess)
}

main();
