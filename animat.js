    window.addEventListener("DOMContentLoaded", function() {
        
        let closBtn = document.querySelectorAll('.clos'),
            card = document.querySelectorAll(".card");
        closBtninner = document.querySelector(".clos");
    
        closBtn.forEach(function (e) {
            e.addEventListener("click", closeCard),
                e.addEventListener("click", function () {
                    e.style.display = "none";
                })
        });
    
        function closeCard(event) {
            event.stopPropagation();
            event.target.closest('.card').classList.add("closed");
        }
    
        card.forEach(function (g) {
            g.addEventListener("click", open),
            g.addEventListener("click", function(){
                closBtn.forEach(function (e) {
                    e.style.display = "block";
            })
           })
        });
    
        function open(global) {
            if (global.currentTarget.classList.contains("closed")) {
                global.currentTarget.classList.remove("closed");
            }
        }
    })
