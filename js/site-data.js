/* ===========================================================
   SAVANA SCHOOL SHEEMA - ADMIN CONTENT FILE
   This is the only file the admin needs to edit to update
   photos, notices and the WhatsApp contact.
   =========================================================== */

window.SCHOOL = {
  // WhatsApp number in international format, no + or spaces (0782492279 -> 256750706946)
  whatsappNumber: '256750706946',
  whatsappName: 'Savana School Sheema administrators number',
  whatsappMessage: 'Hello Savana School Sheema, I would like to make an inquiry.',

  /* NOTICES - newest first. Date format: YYYY-MM-DD */
  news: [
    { date: '2026-10-26', title: 'Welcome to our new website', text: 'Find fees, photos and contact details here. Updates will be posted by the school administrator.' }
    // { date: '2026-11-03', title: 'Term dates', text: 'Write the notice here.' },
  ],

  /* GALLERY - to add a photo:
     1) Put the image file in the folder  images/gallery/
     2) Add a line below with its file name and a caption.
     Newest first. Leave the list empty to show placeholders. */
  gallery: [
    // { src: 'images/gallery/sports-day.jpg', caption: 'Sports day 2026' },
    // { src: 'images/gallery/p7-graduation.jpg', caption: 'P.7 graduation' },
  ]
};
