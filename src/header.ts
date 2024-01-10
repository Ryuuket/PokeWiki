import logo from '../img/logo.png'

export const renderHeader = (): string => `
    <header>
        <img class="logo" src=${logo}><img>
        <div class="input-container">
            <input id="search" type="search" placeholder="Search">
        </div>
    </header>
`