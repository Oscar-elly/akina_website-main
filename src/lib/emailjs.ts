import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

export const emailTemplates = {
  volunteer: 'volunteer_template_id', // Replace with your template ID
  partnership: 'partnership_template_id', // Replace with your template ID
  events: 'events_template_id', // Replace with your template ID
  contact: 'contact_template_id', // Replace with your template ID
};

export const sendEmail = async (templateId: string, templateParams: Record<string, any>) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your service ID
      templateId,
      templateParams
    );
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};

export default emailjs;
