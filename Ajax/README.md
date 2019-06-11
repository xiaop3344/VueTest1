Ajax进行异步

需要cnpm install --save pubsub-js  用于组件组件通信,可以 兄弟之间传递都可以
需要 cnpm insatall vue-resource --save
需要 cnpm install axios --save

post 请求的时候 用例
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
