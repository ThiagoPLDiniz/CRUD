import { Component, OnInit } from "@angular/core";
import {Usuario} from "./usuario";

@Component ({
    selector: 'app-usuario-list',
    templateUrl: './Usuario-list.component.html',

})
export class UsuariosListComponent implements OnInit {
    usuarios: Usuario[] = [];

    ngOnInit(): void {
        this.usuarios = [
        {
            id: 1,
            nome: 'Thiago Diniz',
            avatarUrl:'',
            cpf: 15826022710,
            email: 'thiagopaesldiniz@gmail.com'
        },
        {
            id: 2,
            nome: 'Celso Ramos',
            avatarUrl:'',
            cpf: 19209809812,
            email: 'sistemasthiagodiniz@gmail.com'
        }
    ]
    }
}