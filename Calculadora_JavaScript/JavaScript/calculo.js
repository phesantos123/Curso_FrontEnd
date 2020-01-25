
        function guarda(caractere) {
        window.document.forms[0].num.value += caractere
        }
        function MostraResultado() {
        window.document.forms[0].num.value = eval(window.document.forms[0].num.value)
        }
        function Limpar() {
        window.document.forms[0].num.value = ""
        }