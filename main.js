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
console.log(languages2.push('Dark', 'Java', 'PHP'));
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

// Câu lệnh rẽ nhánh If else: