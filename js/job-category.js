const categoryFilter = document.getElementById('categoryFilter')
const jobCards = document.querySelectorAll('.job-card')

function filterJobs() {
  const selectedCategory = categoryFilter.value.toLowerCase()

  jobCards.forEach((card) => {
    const cardCategory = card.dataset.category.toLowerCase()

    if (selectedCategory === '' || selectedCategory === cardCategory) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  })
}

categoryFilter.addEventListener('change', filterJobs)
