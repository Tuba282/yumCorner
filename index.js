gsap.registerPlugin(ScrollTrigger);
//********************************** NavLinks Data  */ 
let navText = ['Dashboard', 'Profile', 'SignUp', 'SignIn'];
let navIcons = ['fa-solid fa-cube', 'fa-solid fa-user', 'fa-regular fa-id-badge', 'fa-solid fa-key']
let navLinks = document.querySelector(".navLinks")
function navContent() {
    navText.forEach((text, ind) => {
        var li = document.createElement("li")
        let liText = document.createTextNode(`${text}`)
        let i = document.createElement("i")
        i.setAttribute("class", `${navIcons[ind]}`)
        li.appendChild(i)
        li.appendChild(liText)
        console.log(li.textContent);
        navLinks.appendChild(li)

    })

}
// navContent()


//********************************** Dasboard Pages  */ 

let Pages = ['Home', 'About Us', 'Recipe', 'Tips', 'Gallery', 'WishList']
let PageIcons = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#ffffffbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#ffffffbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1"><path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"/><path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><g fill="#ffffffbd"><path d="M8.5 6.128a.984.984 0 0 0-1.39 0l-1.629 1.63a.984.984 0 0 0 0 1.389l.897.897a11.4 11.4 0 0 1 2.895-3.142zm16.598 16.599a11.4 11.4 0 0 1-3.142 2.895l.898.897a.984.984 0 0 0 1.388 0l1.63-1.63a.984.984 0 0 0 0-1.388zM15.26 12.28a.627.627 0 0 1-.42.782l-2.293.686a.628.628 0 1 1-.36-1.204l2.292-.686c.332-.1.682.09.782.422m4.106 2.172a.63.63 0 0 1 .52.72l-.382 2.363a.628.628 0 0 1-1.24-.2l.382-2.363a.63.63 0 0 1 .72-.52m-4.339 6.018a.628.628 0 0 0 .884-.893l-1.7-1.684a.628.628 0 0 0-.884.892zm2.96-7.877a.662.662 0 1 1-.935-.936a.662.662 0 0 1 .935.936m1.272 8.039a.662.662 0 1 1-.936-.936a.662.662 0 0 1 .935.936m-8.834-2.831a.662.662 0 1 0 .936-.935a.662.662 0 0 0-.936.935"/><path d="M22.059 22.059A8.568 8.568 0 1 1 9.941 9.941a8.568 8.568 0 0 1 12.116 12.116m-5.176.93c.485.079.966.156 1.402.02c.446-.145.79-.495 1.132-.845c.208-.212.415-.424.645-.589c.227-.162.488-.293.75-.423c.44-.22.882-.44 1.16-.817c.273-.37.345-.854.418-1.34c.043-.294.087-.588.175-.858c.083-.255.215-.506.348-.76c.229-.437.463-.883.463-1.377c0-.483-.233-.931-.462-1.371a5 5 0 0 1-.349-.765c-.088-.271-.133-.566-.178-.86c-.074-.483-.148-.966-.414-1.34c-.275-.382-.72-.6-1.162-.82a5.3 5.3 0 0 1-.749-.419a5.4 5.4 0 0 1-.62-.57c-.35-.356-.703-.717-1.157-.865c-.43-.14-.905-.061-1.39.019a5.6 5.6 0 0 1-.895.098c-.29 0-.587-.048-.883-.096c-.485-.078-.966-.156-1.402-.02c-.446.145-.79.496-1.132.845c-.208.212-.415.424-.645.59a5.5 5.5 0 0 1-.75.422c-.44.22-.882.44-1.16.817c-.273.37-.345.854-.418 1.34a5.3 5.3 0 0 1-.175.859a5 5 0 0 1-.348.759c-.23.437-.463.884-.463 1.377c0 .483.233.931.462 1.371c.134.257.265.51.349.766c.088.27.133.565.178.859c.074.484.148.966.414 1.34c.275.382.72.601 1.162.82c.262.128.523.257.749.42c.217.16.418.364.62.57c.35.355.703.716 1.157.864c.442.14.923.06 1.407-.02c.294-.048.59-.097.878-.097c.29 0 .587.048.883.096"/><path d="M4.216 3.233a5.08 5.08 0 0 1 7.178 0l.2.2c4.675-1.634 10.081-.586 13.82 3.153s4.787 9.146 3.153 13.82l.2.2a5.08 5.08 0 0 1 0 7.178l-1.63 1.63a5.08 5.08 0 0 1-7.179 0l-.543-.544a13.31 13.31 0 0 1-12.83-3.456A13.31 13.31 0 0 1 3.13 12.585l-.544-.543a5.08 5.08 0 0 1 0-7.179zM9.98 4.648a3.08 3.08 0 0 0-4.35 0L4 6.278a3.08 3.08 0 0 0 0 4.35l1.403 1.402A11.32 11.32 0 0 0 8 24a11.32 11.32 0 0 0 11.97 2.597L21.373 28a3.08 3.08 0 0 0 4.35 0l1.63-1.63a3.08 3.08 0 0 0 0-4.35l-1.142-1.141C28.221 16.673 27.483 11.483 24 8s-8.673-4.22-12.878-2.211z"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#ffffffbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" color="#fff"><path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"/><path d="m12.552 6.5l-1.521 1.695a.4.4 0 0 0 .226.66l1.488.271a.4.4 0 0 1 .195.692L11.052 11.5"/></g></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffffbd" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="#ffffffbd" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffffbd" d="M21.773 4.236a7.5 7.5 0 0 0-1.978.476a8.4 8.4 0 0 0-1.443.73a9.2 9.2 0 0 0-1.576 1.252c-.303.3-.563.601-.776.886a8.6 8.6 0 0 0-1.403-1.453a9 9 0 0 0-1.634-1.075c-1.058-.54-2.3-.893-3.674-.846a7.5 7.5 0 0 0-1.865.307a8.7 8.7 0 0 0-1.967.862q-.703.417-1.25.92c-.52.474-.938 1-1.263 1.566A6.6 6.6 0 0 0 2.26 9.57c-.19.77-.253 1.58-.201 2.407c.057.909.25 1.837.563 2.754c.659 1.934 1.844 3.815 3.377 5.349q.407.407.899.887c2.283 2.228 5.755 5.454 8.024 7.285a1.76 1.76 0 0 0 2.186.04q.345-.262.71-.556a49 49 0 0 0 1.532-1.297q.567-.498 1.144-1.027c.49-.448.98-.907 1.462-1.366q.565-.537 1.108-1.064c.498-.483.978-.955 1.427-1.4c.388-.384.753-.748 1.089-1.084l.414-.413l.005-.005a14.5 14.5 0 0 0 2.88-4.11q.359-.776.604-1.569c.245-.792.4-1.591.453-2.375a8 8 0 0 0-.171-2.343c-.433-1.881-1.62-3.53-3.766-4.603a9 9 0 0 0-1.395-.558a7.4 7.4 0 0 0-2.832-.286M18.19 8.108l8.228 8.229q-.401.657-.894 1.277l-8.389-8.389q.266-.181.464-.445c.16-.214.358-.442.59-.672m1.623-1.205q.344-.187.718-.332q.412-.16.864-.257l6.438 6.437a9.5 9.5 0 0 1-.48 1.693zm7.924 2.924l-3.22-3.22q.288.113.588.261c1.434.718 2.268 1.741 2.632 2.96m-15.95-3.122l12.379 12.38l-1.089 1.082l-13.95-13.95a5.3 5.3 0 0 1 2.34.354q.162.063.32.134m-4.856.145l14.72 14.717q-.544.528-1.107 1.063L5.623 7.711a6 6 0 0 1 1.31-.861m-2.499 2.5L19.08 23.997q-.579.53-1.146 1.026L4.048 11.137a5.1 5.1 0 0 1 .385-1.787m.29 5.29l11.673 11.673q-.177.142-.35.275c-2.523-2.055-6.526-5.817-8.632-7.923a12.3 12.3 0 0 1-2.691-4.025"/></svg>`
]
let sidebarPages = document.querySelector(".sidebarPages")

const dasboardPages = () => {
    Pages.forEach((page, ind) => {
        let li = document.createElement("li")
        li.setAttribute("id", `${page}`)
        let liSpan = document.createElement("span")
        let liText = document.createTextNode(`${page}`)
        let svg = document.createElement("span")
        svg.innerHTML = `${PageIcons[ind]}`
        li.appendChild(svg)
        liSpan.appendChild(liText)

        li.appendChild(liSpan)

        sidebarPages.appendChild(li)
    })

}
dasboardPages()

//********************************** burger  */ 

gsap.fromTo(".heroImg-1",
    {
        opacity: 0,
        y: -400,
    },
    {
        opacity: 1,
        y: 0,
        duration: 2,
        zIndex: 5,
    }
);
gsap.fromTo(".heroImg-2",
    {
        opacity: 0,
        y: -300,
    },
    {
        opacity: 1,
        y: 0,
        zIndex: 3,
        duration: 2,
    }
);
gsap.fromTo(".heroImg-3",
    {
        opacity: 0,
        y: -200,
    },
    {
        opacity: 1,
        y: -10,
        zIndex: 2,
        duration: 2,
    }
);
gsap.fromTo(".heroImg-4",
    {
        opacity: 0,
        y: -100,
    },
    {
        opacity: 1,
        y: -5,
        duration: 2,
    }
);


//********************************** toggle menu  */ 

let bars = document.getElementById("bars")
bars.addEventListener("click", () => {
    document.getElementById("sidebarPages").classList.toggle("show-links")
})
//********************************** sidebar Collapse  */

let sidebarCollapse = document.getElementById("sidebarCollapse")
sidebarCollapse.addEventListener("click", () => {
    let logo = document.querySelector(".logo")
    let plan = document.querySelector(".plan")
    let logoFirstChild = document.querySelector(".logo").firstElementChild
    let sidebarPages = document.getElementById("sidebarPages")
    let ProfileContainer = document.getElementById("ProfileContainer")

    logo.classList.toggle("no-border")
    logo.classList.toggle("hidden")
    plan.classList.toggle("hidden")
    logoFirstChild.classList.toggle("hidden")
    // sidebarPages.classList.toggle("hidden")
    ProfileContainer.classList.toggle("hidden")




    if (logo.classList.contains("hidden")) {
        document.querySelector(".sidebar").style.width = "5%"
        document.querySelector(".mainContent").style.width = "95%"


        let getText = document.querySelectorAll("#sidebarPages li")
        getText.forEach((text) => {
            text.style.cssText = `justify-content: center;z-index: 2;width:"200px";padding: 2px 2px 2px 2px;`
            text.lastElementChild.style.display = "none"
        })

        function checkScreenWidth() {
            let mediaQuery = window.matchMedia("(max-width: 998px)");
            if (mediaQuery.matches) {
                console.log("Halloooo");
                logo.classList.remove("no-border")
                logo.classList.remove("hidden")
                logoFirstChild.classList.remove("hidden")
                // let logo = document.querySelector(".logo")
                document.querySelector(".sidebar").style.width = "100%"
                document.querySelector(".mainContent").style.width = "100%"


            } else {
                console.log("Not Haloo");
            }
        }

        checkScreenWidth();


        window.addEventListener("resize", checkScreenWidth);


    } else {
        document.querySelector(".sidebar").style.cssText = ``
        document.querySelector(".mainContent").style.cssText = ``
        console.log("else");
        let getText = document.querySelectorAll("#sidebarPages li")
        getText.forEach((text) => {
            text.style.cssText = ``
            text.lastElementChild.style.display = "block"
        })
    }
})

//********************************** Special Offer  */ 

let offerData = [
    {
        name: "Pizza Mondays",
        heading: "$12 PIZZAS & $6 WINES",
        description: "Pizza is a traditional dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It can also be topped with additional vegetables, meats, and condiments.",
        image: "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-1.png"
    },
    {
        name: "Burger Tuesdays",
        heading: "$12 BURGERS & $6 PINTS",
        description: "A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be >pan fried, barbecued, or flame broiled",
        image: "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-2.png"
    },
    {
        name: "Ocean Wise Fish",
        heading: "$16 FISH & CHIPS",
        description: "Fish and chips is a hot dish of English origin consisting of fried battered fish and hot potato chips. It is a common take-away food and an early example of culinary fusion.",
        image: "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-3.png"
    },
    {
        name: "East Coast",
        heading: "$12 MUSSELS & $6 PINTS",
        description: "Steaming fresh 'moules' make the perfect sharing bowl - flavour with sweet cider, herbs and garlic.",
        image: "https://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-4.png"
    }

]

let offerDiv = document.createElement("div")
offerDiv.setAttribute("class", "offerDiv")

let offer = document.querySelector(".offer");
offerDiv.innerHTML = `
        <div class="options">
            <p onClick="firstOffer()">${offerData[0].name}</p>
            <p onClick="secondOffer()">${offerData[1].name}</p>
            <p onClick="thirdOffer()">${offerData[2].name}</p>
            <p onClick="forthOffer()">${offerData[3].name}</p>
        </div>
        <div class="desp">
            <h1>${offerData[0].heading}</h1>
            <p>${offerData[0].description}</p>
            <hr/>
        </div>
        <div class="img">
            <img src="${offerData[0].image}">
        </div>
`;
console.log(offerDiv);


const firstOffer = () => {
    offerDiv.innerHTML = `
        <div class="options">
            <p onClick="firstOffer()">${offerData[0].name}</p>
            <p onClick="secondOffer()">${offerData[1].name}</p>
            <p onClick="thirdOffer()">${offerData[2].name}</p>
            <p onClick="forthOffer()">${offerData[3].name}</p>
        </div>
        <div class="desp">
            <h1>${offerData[0].heading}</h1>
            <p>${offerData[0].description}</p>
            <hr/>
        </div>
        <div class="img">
            <img src="${offerData[0].image}">
        </div>
`;
}
const secondOffer = () => {
    offerDiv.innerHTML = `
        <div class="options">
            <p onClick="firstOffer()">${offerData[0].name}</p>
            <p onClick="secondOffer()">${offerData[1].name}</p>
            <p onClick="thirdOffer()">${offerData[2].name}</p>
            <p onClick="forthOffer()">${offerData[3].name}</p>
        </div>
        <div class="desp">
            <h1>${offerData[1].heading}</h1>
            <p>${offerData[1].description}</p>
            <hr/>
        </div>
        <div class="img">
            <img src="${offerData[1].image}">
        </div>
`;
}
const thirdOffer = () => {
    offerDiv.innerHTML = `
        <div class="options">
            <p onClick="firstOffer()">${offerData[0].name}</p>
            <p onClick="secondOffer()">${offerData[1].name}</p>
            <p onClick="thirdOffer()">${offerData[2].name}</p>
            <p onClick="forthOffer()">${offerData[3].name}</p>
        </div>
        <div class="desp">
            <h1>${offerData[2].heading}</h1>
            <p>${offerData[2].description}</p>
            <hr/>
        </div>
        <div class="img">
            <img src="${offerData[2].image}">
        </div>
`;
}
const forthOffer = () => {
    offerDiv.innerHTML = `
        <div class="options">
            <p onClick="firstOffer()">${offerData[0].name}</p>
            <p onClick="secondOffer()">${offerData[1].name}</p>
            <p onClick="thirdOffer()">${offerData[2].name}</p>
            <p onClick="forthOffer()">${offerData[3].name}</p>
        </div>
        <div class="desp">
            <h1>${offerData[3].heading}</h1>
            <p>${offerData[3].description}</p>
            <hr/>
        </div>
        <div class="img">
            <img src="${offerData[3].image}">
        </div>
`;
}
offer.appendChild(offerDiv);

//********************************** Page linking  */ 
const ids = ['Home', 'About Us', 'Recipe', 'Tips', 'Gallery', 'WishList', 'Profile', 'SignUp', 'Login'];
const sections = [
    "HomeContainer",
    "AboutContainer",
    "RecipeContainer",
    "TipsContainer",
    "GalleryContainer",
    "WishlistContainer",
    "ProfileContainer",
    "SignUpContainer",
    "LoginContainer"
];

ids.forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
        sections.forEach((sec, secIndex) => {
            document.getElementById(sec).style.display = (index === secIndex) ? "grid" : "none";
        });
    });
});

//********************************** menu cart  */ 


function addToCard() {

    let cartNum = document.getElementById("cartNum");
    let currentNum = parseInt(cartNum.textContent);
    let updatedNum = currentNum + 1;
    cartNum.textContent = updatedNum;
}

