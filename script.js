let arr = [];


arr.push({
    name: "montaser abdelbadie",
    email: "montaser.atta89@gmail.com",
    age: 21,

    getData: function () {
        console.log(this.name, this.email, this.age);
    }
})

arr.push({
    name: "Mohamed Haytham",
    email: "MohamedHaytham@gmail.com",
    age: 21,

    getData: function () {
        console.log(this.name, this.email, this.age);
    }

})

arr.push({
    name: "Kareem Hisham",
    email: "KareemHisham@gmail.com",
    age: 21,
    getData: function () {
        console.log(this.name, this.email, this.age);
    }

})

arr.push({
    name: "Nader Jamal",
    email: "NaderJamal@gmail.com",
    age: 21,
    getData: function () {
        console.log(this.name, this.email, this.age);
    }

})

arr[0].getData();
let student1 = JSON.stringify(arr[0]);
window.localStorage.user1 = student1;

arr[1].getData();
let student2 = JSON.stringify(arr[1]);
window.localStorage.user2 = student2;

arr[2].getData();
let student3 = JSON.stringify(arr[2]);
window.localStorage.user3 = student3;

arr[3].getData();
let student4 = JSON.stringify(arr[3]);
window.localStorage.user4 = student4;