
// Job Listing Filter Toggle Start ////
  const jobFilter = document.getElementById('jobListFilter')
  const jobCards = document.querySelectorAll('.job-list')

  function jobLists() {
    const selectedJob = jobFilter.value.toLowerCase()

    jobCards.forEach((card) => {
      const selectedCard = card.dataset.category.toLowerCase()

      if (selectedJob === '' || selectedJob === selectedCard) {
        card.style.display = ''
      } else {
        card.style.display = 'none'
      }
    })
  }

  jobFilter.addEventListener('change', jobLists)
  // Job Listing Filter Toggle End ////
