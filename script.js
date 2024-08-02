let arr = [];


arr.push({
    name: "montaser abdelbadie",
    email: "montaser.atta89@gmail.com",
    age: 21,

    getData: function () {
        console.log(this.name, this.email, this.age);
    }
})


arr[0].getData();
let student1 = JSON.stringify(arr[0]);
window.localStorage.user1 = student1;
