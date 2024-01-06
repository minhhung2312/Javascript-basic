// Kiểu dữ liệu false:
// 0 - false - "" - '' - underfined - NaN - null
// Kiểm tra kiểu dữ liệu: typeof + tên biến
var a = 1;
console.log(typeof a)

// Các trường hợp của && và ||
var b = 2;
var result = 'a' && 'b' && 'c';
console.log(result);

var result = 'a' && null && 'c';
console.log(result);

var result = 'a' || null || 'c';
console.log(result);

// Backslash (\)
var fullName = 'Minh \' + \' Hung'
console.log(fullName);

// Kiểm tra độ dài chuỗi
console.log('Độ dài của chuỗi là: ',fullName.length);

// Template String ES6:
var firstName = 'Minh';
var lastName = 'Hung';
console.log(`Toi la: ${firstName} ${lastName}`)

// Làm việc với chuỗi
//1. find index: tìm vị trí chuỗi: tìm được thì trả về vị trí, ngược lại trả về -1
var myString = 'Hoc JS tai JS JS F8! JS';
console.log(myString.indexOf('JS'));
console.log(myString.indexOf('JS',6));
console.log(myString.lastIndexOf('JS'));

// 2.Cut String: cắt chuỗi:
var myString2 = 'Hoc JS tai JS F8!';
console.log(myString2.slice(0,6));
console.log(myString2.slice(-3,-1));

// 3.Replace: Ghi đè:
console.log(myString2.replace('JS','Javascript'));
console.log(myString2.replace(/JS/g,'Javascript'));

// 4.Convert to uppercase: chuyển thành chữ hoa:
var myString3 = 'Hoc JS tai F8!';
console.log(myString3.toUpperCase());

// 5.Convert to lowercase: chuyển thành chữ thường:
console.log(myString3.toLowerCase());

// 6.Trim: Loại bỏ khoảng trắng ở 2 đầu chuỗi:
var myString4 = '   Hoc JS tai F8!   ';
console.log(myString4.trim());
console.log(myString4.trim().length);

// 7.Split: Cắt chuỗi thành một array:
var languages = 'Python, Java, C++';
console.log(languages.split(', '));
console.log(languages.split(''));

// 8.Geta character by index: Lấy kí tự bằng vị trí cho trước:
const myString5 = 'Minh Hung';
console.log(myString5[1]);
console.log(myString5[10]);

// isNaN: Kiểm tra kiểu dữ liệu có phải kiểu NaN không.
// toString: Chuyển kiểu dữ liệu khác sang kiểu chuỗi.
// toFixed: Rút gọn số thập phân. Chuyển thành kiểu chuỗi.
var PI = 3.14;
var a = 3000.34215;
console.log(PI.toFixed());
console.log(a.toFixed(2));

// Mảng:
var languages2 = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages2);

// Kiểm tra một object có phải là array hay không:
console.log(Array.isArray(languages2));

// Đếm số phần tử của mảng:
console.log(languages2.length);

// Lấy phần tử theo vị trí:
console.log(languages2[1]);

// Làm việc với mảng:
// toString: Chuyển dữ liệu sang dạng chuỗi.
console.log(languages2.toString());

// Join: Biến mảng thành một chuỗi:
console.log(languages2.join(', '));

// Pop: Xóa đi phần tử cuối mảng và trả về phân tử đã xóa.
console.log(languages2.pop());
console.log(languages2.pop());
console.log(languages2.pop());
console.log(languages2.pop());
console.log(languages2);

// Push: Thêm một hoặc nhiều phần tử cho mảng.
console.log(languages2.push('Dark', 'C+', 'C'));
console.log(languages2);

// Shift: Xóa đi phần tử đầu tiên của mảng.
console.log(languages2.shift());
console.log(languages2);

// Unshift: Thêm một hoặc nhiều phần tử vào đầu mảng và trả về số phần tử mới của mảng.
var languages3 = [
    'Java',
    'PHP',
    'Javascript',
]

console.log(languages3.unshift('Dark', 'Python'));
console.log(languages3);

// Splingcing: Chèn, xóa một phần tử của mảng: splice.
languages3.splice(1, 1); // Xóa một phần tử bắt đầu từ vị trí số 1
console.log(languages3);

languages3.splice(1, 2); // Xóa hai phần tử bắt đầu từ vị trí số 1
console.log(languages3);

languages3.splice(1, 0, 'C#', 'C++'); // Chèn một hoặc phần tử bắt đầu từ vị trí số 1
console.log(languages3);

languages3.splice(1, 2, 'Ruby', 'Kotlin'); // Xóa hai phần tử và chèn một hoặc phần tử bắt đầu từ vị trí số 1
console.log(languages3);

// Concat: Thường dùng để nói các mảng.
console.log(languages2);
console.log(languages3);
console.log(languages2.concat(languages3));

// Slicing: Cắt một hoặc nhiều phần tử của mảng: slice.
// Thường được dùng để copy mảng:
console.log(languages3);
console.log(languages3.slice(0)); //Copy mảng.
console.log(languages3.slice(1)); //Cắt mảng từ vị trí số 1 đến hết mảng.
console.log(languages3.slice(1, 3)); //Cắt mảng từ vị trí số 1 đến trước vị trí số 3.

// Hàm - Function:
// Toán tử call(): dùng để gọi hàm
function showDialog() {
    // alert('Minh Hung dang tap code');
}

showDialog();

// Truyền tham số cho hàm:
function writeLog(mesage) {
    console.log(mesage); //Trong ngoặc được gọi là tham số.
    console.log(typeof mesage);
}

writeLog('Day la Minh Hung'); //Trong ngoặc được gọi là đối số
writeLog(123);

//Arguments: Đối số.
function writeLog2() {
    console.log(arguments);
}

writeLog2('log 1', 'log 2', 'log 3');

// Vòng lặp For of:
function writeLog3() {
    var myString6 = '';
    for (var param of arguments) {
        myString6 += `${param} - `
    }
    console.log(myString6);
}

writeLog3('log so 1', 'log so 2', 'log so 3');

//Return trong hàm.
// var isConfirm = confirm('Message?');
// console.log(isConfirm);

function cong(a, b) {
    return a+b;
}

var result = cong(3, 2);
console.log(result);

// Polyfill: Tự tạo fuction để hổ trợ cho các trình duyệt cũ không hổ trợ.

// Object: Lưu trữ thông tin của một đối tượng cụ thể:
var genderKey = 'gender';

var myInfo = {
    name: 'Minh Hung',
    age: 19,
    address: 'Long An, VN',
    [genderKey]: 'Nam',
    getName: function() {
        return this.name;
    }
};

var myKey = 'address';

myInfo.email = 'minhhung032@gmail.com'; //Thêm key và value cho object có tên là myInfo.
myInfo['my-phone'] = '0909345547'; //Thêm key và value cho object có tên là myInfo.

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['age']);
console.log(myInfo[myKey]);

// Xóa key và value trong object.
delete myInfo.age;
delete myInfo.address;
console.log(myInfo)

// Lưu trữ value của object là 1 function:
// Key của một function thì ta sẽ gọi nó là phương thức - method.
// Còn lại gọi là thuộc tính - property.
console.log(myInfo.getName());

// Object Constructor: Xây dựng đối tượng:
// Cấu trúc chung: có thể sử dụng nhiều lần, tiện lợi hơn.

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Minh', 'Hùng', 'Avatar1');
var user = new User('Vũ', 'Nguyễn', 'Avatar2');

author.title = 'Chia sẻ dạo tại F8';
user.comments = 'Ảo thật đấy';

console.log(author);
console.log(author.constructor); //Xem lại object constructor.

console.log(user);
console.log(author.getName());
console.log(user.getName());

// Object Prototype - Basic: Đối tượng nguyên mẫu.
// Xem như nguyên liệu tạo nên 1 đối tượng của hàm tạo (object constractor).

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}

console.log(user.className);
console.log(author.getClassName());

// Đối tượng Date:
var date = Date(); //Là một chuỗi.
console.log(date);
console.log(typeof date);

var date = new Date(); //Là một đối tượng.
console.log(date);
console.log(typeof date);

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
console.log(`${day}/${month}/${year} ${hour}:${minute}:${second}`);

// Câu lệnh rẽ nhánh If else: Điều kiện biết trước, có ít hơn 3 trường hợp.
if (day === 2) {
    console.log('Hôm nay là thứ 2');
} else if (day === 3) {
    console.log('Hôm nay là thứ 3');
} else if (day === 4) {
    console.log('Hôm nay là thứ 4');
} else {
    console.log('Hôm nay là một ngày khác thứ 2-3-4');
}

// Câu lệnh rẽ nhánh Switch: Điều kiện biết trước, có hơn 3 trường hợp.
switch(day) {
    case 2:
    case 3:
    case 4:
        console.log('Hôm nay là thứ 2-3-4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
}

switch(day) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    default:
        console.log('Không phải thứ 2-3-4-5');
}

// Toán tử 3 ngôi - Ternary Operator.
var course = {
    name: 'Javascript',
    coin: 250
}

// Dùng câu lệnh if:
// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Miễn phí');
// }

// Dùng toán tử 3 ngôi: dùng trong điều kiện đơn giản.
var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

var a = 1;
var b = 2;
var c = a > b ? a : b; //Gán c với giá trị lớn hơn trong a và b.

// Vòng lặp - Loop:
// Vòng lặp for:
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Python'
];

var arrayLength = myArray.length; // Tăng hiệu năng hoạt động hơn - tối ưu hơn.

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

// Vòng lặp for/in: Lấy ra key của các đối tượng.
var myInfo2 = {
    name: 'Son Dang',
    age: 18,
    address: 'Long An'
}

for (var key in myInfo2) {
    console.log(myInfo2[key]);
}

for (var key in myInfo2) {
    console.log(key);
}

var languages4 = [
    'English',
    'Tieng Viet',
    'French',
]

for (var key in languages4) {
    console.log(languages4[key]);
}

for (var key in languages4) {
    console.log(key);
}

var myString7 = 'JavaScript';

for (var key in myString7) {
    console.log(myString7[key]);
}

for (var key in myString7) {
    console.log(key);
}

// Vòng lặp for/of:
for (var value of languages4) {
    console.log(value);
}

for (var value of myString7) {
    console.log(value);
}

var myInfo3 = {
    name: 'Minh Hung',
    age: 36,
}

for (var value of Object.keys(myInfo3)) {
    console.log(value);
}

for (var value of Object.keys(myInfo3)) {
    console.log(myInfo3[value]);
}

for (var value of Object.values(myInfo3)) {
    console.log(value);
}

// Vòng lặp While:
var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

var i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

// Vòng lặp do/while:
var i = 0;
do {
    i++;
    console.log(i);
} while (i<10);

//Ví dụ về nập thẻ cào, nạp sau thì cho nạp lại 3 lần.
var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('Nạp lại lần '+ i);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i<=3);

// Break và Continue trong vòng lặp:
for (var i = 0; i < 10; i++) {
    console.log(i);

    if (i >= 5) { //Lấy các số nhỏ hơn hoặc 5.
        break;
    }
}

for (var i = 0; i < 10; i++) {
    if (i%2 !== 0) { //Lấy các số chẵn.
        continue;
    }
    
    console.log(i);
}

// Vòng lặp lồng nhau - Nested Loop:
var myArray2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i]);
}

for (var i = 0; i < myArray2.length; i++) {
    for (var j = 0; j < myArray2[i].length; j++) {
        console.log(myArray2[i][j]);
    }
}

// In các số từ 100 về 1:
for (var i = 10; i > 0; i--) {
    console.log(i);
}

// In ra các giá trị 0, 5, 15, 20,...50:
for (var i = 0; i <= 50; i += 5) {
    console.log(i);
}

for (var i = 50; i >= 0; i-=5) {
    console.log(i);
}

// Làm việc với mảng: 
// Array methods:
/*
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Html, Css',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 600,
    },
];

// Duyệt qua các phần tử của mảng:
courses.forEach(function (course, index) {
    console.log(index, course);
});

// Kiểm tra các phần tử của mảng thỏa một điều kiện nào đó.
var isFree = courses.every(function (course, index) {
    console.log(index);
    return course.coin === 0; //Kiểm tra xem tất cả lớp học miễn phí hay không.
});
console.log(isFree);

var isFree = courses.some(function (course, index) {
    console.log(index);
    return course.coin === 0; //Kiểm tra xem 1 trong các lớp học miễn phí hay không.
});
console.log(isFree);

// Tìm kiếm: find(): trả về chỉ 1 phần tử.
var course = courses.find(function (course, index) {
    console.log(index);
    return course.name === 'Ruby'; // Tìm kiếm khóa học có tên : 'Ruby'.
});
console.log(course);

// Tìm kiếm: filter(): trả về 1 hoặc nhiều phần tử.
var listCourse = courses.filter(function (course, index) {
    console.log(index);
    return course.name === 'Ruby'; // Tìm kiếm khóa học có tên : 'Ruby'.
});
console.log(listCourse);

// Map(): chỉnh sửa, thay đổi phần tử của mảng.
var newCourses = courses.map(function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        index: index,
        originArray: originArray,
    }
});
console.log(newCourses);

// Chỉ lấy ra tên.
var newCourses = courses.map(function courseHandler(course, index, originArray) {
    return course.name; 
});
console.log(newCourses);

var newCourses = courses.map(function courseHandler(course, index, originArray) {
    return `<h2>${course.name}</h2>`;
});
console.log(newCourses.join(''));

// Reduce(): Nhận về một giá trị duy nhất.
// Tính tổng số coin của khóa học.
// Viết đầy đủ.
var i = 0;
var totoalCoin = courses.reduce(function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ':i,
        'Biến tích trữ: ':accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích lũy được: ': total
    });

    // console.log(currentValue);
    return total;
}, 0) // 0 là giá trị khởi tạo - initial value.
console.log(totoalCoin);

// Viết ngắn gọn:
var totalCoin2 = courses.reduce(function(accumulator, curentValue) {
    return accumulator + curentValue.coin;
}, 0); // initial value là giá trị không bắt buộc.
console.log(totalCoin2);

// Viết dễ hiểu:
var totalCoin3 = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0); // initial value là giá trị không bắt buộc.
console.log(totalCoin3);

//Ví dụ khác:
var numbers = [100, 200, 220, 200, 480];
var totalCoin = numbers.reduce(function(total, number) {
    return total + number;
}) // Không đặt giá trị khởi tạo.
console.log(totalCoin);

// BT: Flat - "Làm phẳng" mảng từ Depth Array - "Mảng sâu":
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// BT: Lấy ra các khóa học đưa vào mảng mới:
var topics = [
    {
        topic: 'Font-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'JavaScript'
            },
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(newCourses);

var htmls = newCourses.map(function(course){
        return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>`;
}, []);
console.log(htmls.join(''));

// Phương thức: includes methods.
var title = 'Minh Hung Long An';
console.log(title.includes('H',2)); // 2 là vị trí bắt đầu tìm.

var courses = ['Javascript', 'Ruby', 'PHP', 'Dart'];
console.log(courses.includes('Javascript', -4)); // độ dài mảng: 4 + (-4) = 0 vị trí bắt đầu tìm.

// Math object:
/**
 * math.PI: số pi.
 * math.round(): làm tròn trên.
 * math.abs(): giá trị tuyệt đối.
 * math.ceil(): chỉ làm tròn trên.
 * math.floor(): chỉ làm tròn dưới.
 * math.random(): trả về số thập phân ngẫu nhiên nhỏ hơn 1.
 * math.min(): số lớn nhất.
 * math.max(): số nhỏ nhất.
 */
var random = Math.floor(Math.random() * 5);
var bonus = [
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
    '60 coin',
];
console.log(bonus[random]);

// Cường hóa đồ trong game:
var random = Math.floor(Math.random() * 100);
if (random < 5) {
    console.log('Cường hóa thành công!');
} else {
    console.log('Cường hóa thất bại!');
}

// CallBack:
// Là hàm và được truyền thông qua đối số, được gọi lại trong hàm nhận đối số.
function myFunction(param) {
    if (typeof param === 'function') { //Đặt điều kiện để được đúng, không bị lỗi kiểu dữ liệu.
        param('Học lập trình');
    }
}

function myCallBack(value) {
    console.log('Value: ', value);
}
myFunction(myCallBack);

// CallBack tiếp theo:
Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length; // this ở đây là mảng có tên Courses.

    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }

    return output.join('');
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`;
});
console.log(htmls);

// map tạo sẵn.
var htmls2 = courses.map(function(course){
    return `<h2>${course}</h2>`;
})
console.log(htmls2.join(''));

// Bài tập: tự tạo ra: forEach2, reduce2, find2, filter2().
// forEach2:
var nameClass = ['Hung', 'Tu', 'Nhut', 'Kha', 'Sang'];
nameClass.forEach(function(name, index) {
    console.log(index, name);
});

Array.prototype.forEach2 = function(callback){
    var arrayLength2 = this.length;
    for (var i = 0; i < arrayLength2; i++){
        callback(this[i], i);
    }
};
var htmls3 = nameClass.forEach2(function (name, index){
    console.log(index, name);
})

// reduce2: