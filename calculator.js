    function dis(val)
         {
             document.getElementById("result").value+=val
         }

         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
         function back(){
         let value=document.getElementById("result").value
         document.getElementById("result").value=value.slice(0,-1)

         }

         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = ""
         }