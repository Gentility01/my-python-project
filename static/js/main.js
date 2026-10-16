document.addEventListener("DOMContentLoaded", () => {

```
/*
 * Mobile navigation
 */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });
}


/*
 * Book search
 */
const searchInput = document.getElementById("bookSearch");
const booksGrid = document.getElementById("booksGrid");
const noResults = document.getElementById("noResults");

if (searchInput && booksGrid) {

    const filterBooks = () => {

        const searchTerm = searchInput.value
            .trim()
            .toLowerCase();

        const books = booksGrid.querySelectorAll(".book-card");

        let visibleBooks = 0;

        books.forEach((book) => {

            const title = book.dataset.title || "";
            const author = book.dataset.author || "";

            const matches =
                title.includes(searchTerm) ||
                author.includes(searchTerm);

            book.style.display = matches ? "" : "block";

            if (!matches) {
                book.style.display = "none";
            } else {
                visibleBooks++;
            }
        });

        if (noResults) {
            noResults.style.display =
                visibleBooks === 0 ? "block" : "none";
        }
    };

    searchInput.addEventListener("input", filterBooks);
}


/*
 * Sort books alphabetically
 */
const sortButton = document.getElementById("sortButton");

if (sortButton && booksGrid) {

    let ascending = true;

    sortButton.addEventListener("click", () => {

        const books = Array.from(
            booksGrid.querySelectorAll(".book-card")
        );

        books.sort((a, b) => {

            const titleA = a.dataset.title || "";
            const titleB = b.dataset.title || "";

            return ascending
                ? titleA.localeCompare(titleB)
                : titleB.localeCompare(titleA);
        });

        books.forEach((book) => {
            booksGrid.appendChild(book);
        });

        ascending = !ascending;

        sortButton.textContent = ascending
            ? "Sort A-Z"
            : "Sort Z-A";
    });
}


/*
 * Book modal
 */
const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

const viewButtons =
    document.querySelectorAll(".view-button");

viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const title = button.dataset.title;

        if (modalTitle) {
            modalTitle.textContent = title;
        }

        if (modal) {
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
        }
    });
});


const closeModal = () => {

    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
    }
};


if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
}


/*
 * Close modal with Escape
 */
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal) {
        closeModal();
    }
});
```

});
