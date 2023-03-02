            
            // Function Pour addisionner

            function Addition(NombreA,NombreB) {
                return NombreA +NombreB;
            }
            function Multiplication(NombreA,NombreB) {
                return NombreA * NombreB;
            }
            function Soustraction(NombreA,NombreB) {
                return NombreA - NombreB;
            }
            function Division(NombreA,NombreB) {
                return NombreA / NombreB;
            }

            // End Function
        do {
            var choix = Number(prompt("Que souhaitez-vous faire ?\n \n 1-Addition \n 2-Multiplication \n 3-Soustraction \n 4-Division")); 
        } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

        do {
            var premiereNombre = Number(prompt("Entez un premier Nombre"));
            var deuxiemeNombre = Number(prompt("Entez le dexieme Nombre"));
        } while (isNaN(premiereNombre) || isNaN(deuxiemeNombre));

        switch (choix) {
            case  1:
                var resultat = Addition(premiereNombre,deuxiemeNombre);
                break;
            case  2:
                var resultat = Multiplication(premiereNombre,deuxiemeNombre);
                break;
            case  3:
                var resultat = Soustraction(premiereNombre,deuxiemeNombre);
                break;
            case  4:
                var resultat = Division(premiereNombre,deuxiemeNombre);
                break;
        
        }
        alert("Votre Resultat est " + resultat);