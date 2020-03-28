import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul class="nav justify-content-center">
                    <li class="nav-item">

                    </li>
                    <li class="nav-item">
                        <p class="nav-link actve" >
                            Servicios a domicilio y para llevar en
                            </p>
                        <h1> LA PAZ, B.C.S.</h1>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/anunciate" tabindex="-1" aria-disabled="true"> Anunciate aquí por $1 USD al mes</a>
                    </li>
                </ul>
            </div>
        )
    }
}