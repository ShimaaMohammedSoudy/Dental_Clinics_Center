// document.querySelectorAll('.people-watting .btn input[type="checkbox"]').forEach(checkbox => {
//     checkbox.addEventListener('change', function () {
//         if (this.checked) {
//             // الحصول على العنصر الأب (btn) ومن ثم نسخ محتواه
//             const parent = this.parentElement;
//             const clonedElement = parent.cloneNode(true);
//             clonedElement.querySelector('input[type="checkbox"]').checked = true;

//             // إضافة النسخة إلى قائمة "انهاء الكشف والجلسات"
//             document.querySelector('.people-finshed').appendChild(clonedElement);

//             // إزالة العنصر من قائمة "قائمة الانتظار"
//             parent.remove();

//             // إضافة حدث لتحديث القائمة الجديدة
//             clonedElement.querySelector('input[type="checkbox"]').addEventListener('change', function () {
//                 if (!this.checked) {
//                     // إعادة العنصر إلى "قائمة الانتظار"
//                     const waitingElement = clonedElement.cloneNode(true);
//                     waitingElement.querySelector('input[type="checkbox"]').checked = false;
//                     document.querySelector('.people-watting').appendChild(waitingElement);
//                     clonedElement.remove();
//                 }
//             });
//         }
//     });
// });










document.addEventListener('DOMContentLoaded', function() {
    const waitingList = document.querySelector('.people-watting');
    const finishedList = document.querySelector('.people-finshed');

    // Function to move item from one list to another
    function moveItem(checkbox, targetList) {
        const item = checkbox.parentElement;
        targetList.appendChild(item);
    }

    // Add event listeners to checkboxes in both lists
    waitingList.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox' && e.target.checked) {
            moveItem(e.target, finishedList);
        }
    });

    finishedList.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox' && !e.target.checked) {
            moveItem(e.target, waitingList);
        }
    });
});

