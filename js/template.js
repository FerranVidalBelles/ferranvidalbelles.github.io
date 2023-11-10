function loadFooter() {
    const body = document.getElementsByTagName("BODY")[0];
    const footer = body.appendChild(document.createElement("footer"));
    //get actual year
    const year = new Date().getFullYear();
    footer.outerHTML = `
    <footer>
        <a href="#">© ${year} Ferran Vidal</a>
        <div id="footer-icons">
            <a href="https://www.linkedin.com/in/ferran-vidal-bellés/" target="_blank" class="fa-brands fa-linkedin"></a>
        </div>
    </footer>`;
}

function loadNav(tabs) {
    const ul = document.createElement("ul");
    tabs.forEach(tab => {
        const li = ul.appendChild(document.createElement("li"));
        const a = li.appendChild(document.createElement("a"));
        
        a.href = tab.url;
        a.text = tab.name;
        
        if (tab.blank) {
            a.target = "_blank";
        }
    });

    const content = document.getElementById("layout");
    const nav = content.appendChild(document.createElement("nav"));

    const title = nav.appendChild(document.createElement("h3"));
    title.innerText = "Ferran Vidal";

    const div = nav.appendChild(document.createElement("div"));
    div.id = "nav-items";
    div.appendChild(ul);
}