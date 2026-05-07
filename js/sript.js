// document.addEventListener("DOMContentLoaded", function() {
//   let profilePic = document.getElementById("patientImage");
//   let inputFile = document.getElementById("imageUpload");

//   inputFile.onchange = function () {
//       profilePic.src = URL.createObjectURL(inputFile.files[0]);
//   };
// })
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault();  // منع الإرسال التلقائي للنموذج

//   // الحصول على الخيار المحدد من المستخدم
//   const role = document.querySelector('input[name="role"]:checked').value;

//   // التحقق من الخيار المختار وإعادة التوجيه إلى الصفحة المناسبة
//   if (role === 'patient') {
//       window.location.href = '/page/doctor team.html';  // صفحة تيم الدكاترة
//   } else if (role === 'doctor') {
//       window.location.href = 'doctor page.html';  // صفحة بروفيل الدكتور
//   } else if (role === 'reception') {
//       window.location.href = '/page/details assisent.html';  // صفحة موظف الاستقبال
//   }
// });
// document.addEventListener('DOMContentLoaded', function () {
//   // التعامل مع أزرار التعديل في جدول المرضى
//   const editButtons = document.querySelectorAll('.edit-btn');
  
//   editButtons.forEach(button => {
//       button.addEventListener('click', () => {
//           alert('تم تعديل البيانات!');
//       });
//   });

//   // وظيفة التحديث والحذف في الجدول السفلي
//   function Edit(index) {
//       alert(`تحديث البيانات للعنصر رقم ${index}`);
//   }

//   function DeleteProduct(index) {
//       const confirmed = confirm(`هل تريد حذف العنصر رقم ${index}؟`);
//       if (confirmed) {
//           document.querySelector(`#tableBody tr:nth-child(${index + 1})`).remove();
//       }
//   }

//   // تفعيل الوظائف للأزرار
//   window.Edit = Edit;
//   window.DeleteProduct = DeleteProduct;
// });



