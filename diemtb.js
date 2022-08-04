physics = prompt('nhập điểm vật lý:');
chemistry = prompt('nhập điểm hóa học:');
biology = prompt('nhập điểm sinh học:');
let a = parseInt(physics);
let b = parseInt(chemistry);
let c = parseInt(biology);
let sum = a + b + c;
let dtb = sum / 3
document.write('tổng = ' + sum )
document.write('<br>')
document.write('điểm trung bình = ' + dtb)
