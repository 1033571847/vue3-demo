//# 题目二：优化下面代码（需要完成使用 Promise 优化和 async/await 两种优化方式）
// js
axios.get(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, response1) {
    if (err) {
      console.error(err);
    } else {
      axios.get(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          response1.data.id,
        function (err, response2) {
          if (err) {
            console.error(err);
          } else {
            axios.get(
              "https://jsonplaceholder.typicode.com/users/" +
                response2.data[0].userId,
              function (err, response3) {
                if (err) {
                  console.error(err);
                } else {
                  axios.get(
                    "https://jsonplaceholder.typicode.com/todos?userId=" +
                      response3.data.id,
                    function (err, response4) {
                      if (err) {
                        console.error(err);
                      } else {
                        // Do something with the data
                        const data1 = response1.data;
                        const data2 = response2.data;
                        const data3 = response3.data;
                        const data4 = response4.data;
                        const allData = [data1, data2, data3, data4];
                        localStorage.setItem(
                          "allData",
                          JSON.stringify(allData)
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  }
);

// 回答
// 方法一
let response1 = "";
let response2 = "";
let response3 = "";
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    response1 = res;
    return axios.get(
      "https://jsonplaceholder.typicode.com/comments?postId=" +
        response1.data.id
    );
  })
  .then((res) => {
    response2 = res;
    return axios.get(
      "https://jsonplaceholder.typicode.com/users/" + response2.data[0].userId
    );
  })
  .then((res) => {
    response3 = res;
    return axios.get(
      "https://jsonplaceholder.typicode.com/todos?userId=" +
        response3.data[0].userId
    );
  })
  .then((response4) => {
    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;
    const data4 = response4.data;
    const allData = [data1, data2, data3, data4];
    localStorage.setItem("allData", JSON.stringify(allData));
  });

// 方法二
async function fn() {
  const res1 = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  const response1 = res1;

  const res2 = await axios.get(
    "https://jsonplaceholder.typicode.com/comments?postId=" + response1.data.id
  );
  const response2 = res2;

  const res3 = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + response2.data[0].userId
  );
  const response3 = res3;

  const res4 = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?userId=" + response3.data.id
  );
  const response4 = res4;
  const data1 = response1.data;
  const data2 = response2.data;
  const data3 = response3.data;
  const data4 = response4.data;
  const allData = [data1, data2, data3, data4];
  localStorage.setItem("allData", JSON.stringify(allData));
}
fn();

// # 题目四：JS 题目

// 实现一个方法 JS 方法，针对给定的两个数组进行去重并根据年龄分组

// ```js
// 例如输入：

const arr1 = [
  { name: "Facebook", age: 24 },
  { name: "Github", age: 18 },
  { name: "OpenAI", age: 18 },
];
const arr2 = [
  { name: "Google", age: 24 },
  { name: "Copilot", age: 20 },
  { name: "John", age: 24 },
];

// 输出
{
  [
    {
      name: "Github",
      age: 18,
    },
    {
      name: "OpenAI",
      age: 18,
    },
  ],
    [
      {
        name: "Copilot",
        age: 20,
      },
    ],
    [
      {
        name: "Facebook",
        age: 24,
      },
      {
        name: "Google",
        age: 24,
      },
    ];
}
function func(a, b) {
  return a.age - b.age;
}
function groupByAge(arr1, arr2) {
  let arr = [];
  arr.push(...arr1, ...arr2);
  arr.sort(func);
  console.log("arr", arr);

  const sArr = Array.from(new Set(arr.map((res) => res.age)));
  const index = [];
  const newArr = [];
  const obj = {};
  for (var i = 0; i < arr.length; i++) {
    index.push(arr[i].age);
    if (index.filter((res) => res === arr[i].age).length < 3) {
      newArr.push(arr[i]);
    }
  }
  for (const i in sArr) {
    obj[i] = newArr.filter((res) => res.age === sArr[i]);
  }
  return obj;
}
console.log(groupByAge(arr1, arr2));
