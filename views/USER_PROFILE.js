const deleteBtns = document.querySelectorAll('.delete-btn');

        deleteBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const card = btn.closest('.card');
            card.remove();
          });
        });