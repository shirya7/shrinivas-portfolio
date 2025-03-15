import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Container, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const serviceID = "service_fvferug";
  const adminTemplateID = "template_5kwga42"; 
  const userTemplateID = "template_f25sv06";  // User gets the thank-you email
  const publicKey = "1d4NS8E35FXOeMHgi";

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Sending Email with Data:", data);
  
    try {
      // Send email to Admin (Ensure correct template)
      await emailjs.send(serviceID, adminTemplateID, {
        name: data.name,
        email: data.email,
        message: data.message,
      }, publicKey);
      console.log("Admin Email sent successfully.");
  
      // Send Auto-reply to User
      await emailjs.send(serviceID, userTemplateID, {
        from_name: data.name,
        email: data.email,
        message: data.message, // Ensure message is included
      }, publicKey);
     
  
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <Container>
      <ToastContainer/>
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" fontWeight="bold">Contact Me</Typography>
        <Typography variant="body1" color="textSecondary" mt={1}>
          Feel free to reach out for collaboration or any inquiries.
        </Typography>
      </Box>
      <Box
        component="form"
        mt={3}
        sx={{ maxWidth: 500, margin: "auto", textAlign: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          margin="normal"
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, textTransform: "none" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
