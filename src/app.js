const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')

    contacts.forEach(contact => {
      let li = document.createElement('li')

      li.innerHTML = `
        <p class="f-bold">${contact.name}</p>
        <p class="li-fs">${contact.email}</p>
        <p class="li-fs li-bb">${contact.phone}</p><br>
      `
      ul.appendChild(li)
    })

    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  const contactForm = document.querySelector('.new-contact-form')

  contactForm.addEventListener('submit', event => {
    event.preventDefault()

    const { name, email, phone, company, notes, twitter } = contactForm.elements

    const contact = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

    let contacts = JSON.parse(storage.getItem('contacts')) || []

    contacts.push(contact)

    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
    contactForm.reset()
  })
})
