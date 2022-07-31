function Menu() {
 return(
    <div>
         <nav className={"navbar navbar-expand-lg navbar-dark border-col"}>
             <div className={"container px-5"}>
                 <form className={"navbar-brand"}>
                     <input type="search" name="" placeholder="Rechercher un produit..."/>
                     <i className="fa-solid fa fa-search"></i>
                 </form>
                 <img src="/logo.png" alt="Logo"/>
                 <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                         aria-expanded="false" aria-label="Toggle navigation"><span
                     className="navbar-toggler-icon"></span></button>
                 <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                     <select className={"form-select"} name="" id="">
                         <option value="">FR</option>
                         <option value="">FR</option>
                         <option value="">FR</option>

                     </select>
                     <select className={"form-select"} name="" id="">
                         <option value="">XOF</option>
                         <option value="">FR</option>
                         <option value="">FR</option>

                     </select>
                     <button className={"btn btn--white btn-lg"}>Connexion</button>
                     <button className={"btn  btn-primary btn-lg"}>Inscription</button>
                 </div>
             </div>
         </nav>
         <nav className={"navbar navbar-expand-lg navbar-dark"}>
             <div className={"container px-5"}>
                 <ul className={"navbar-nav mb-2 mb-lg-0"}>
                           <li className={"nav-item"}><a className={"nav-link"}>Catégories</a></li>
                           <li className={"nav-item"}><a className={"nav-link"}>Vêtements</a></li>
                           <li className={"nav-item"}><a className={"nav-link"} >Accéssoires</a></li>
                           <li className={"nav-item"}><a className={"nav-link"} >Chaussures</a></li>
                       </ul>
             </div>
         </nav>
    </div>
 );
}
export default Menu