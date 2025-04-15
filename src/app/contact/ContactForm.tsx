"use client";

import {
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Icon,
} from "@/once-ui/components";
import { useState } from "react";
import { contact, social } from "@/app/resources/content";
import styles from "./contact.module.scss";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    form.append("access_key", contact.formKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: form
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
    
    setIsSubmitting(false);
  }

  return (
    <>
      {/* Contact Form */}
      <Flex 
        fillWidth
        direction="column"
        gap="l"
        padding="xl"
        border="neutral-medium"
        background="neutral-alpha-weak"
        radius="l"
        shadow="m"
        className={styles.formContainer}
      >
        {status === "success" ? (
          <Flex direction="column" gap="m" horizontal="center" vertical="center" paddingY="xl">
            <Icon name="checkCircle" size="xl" onBackground="success-medium" />
            <Heading variant="display-strong-m">Message Sent!</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Thank you for your message. I'll get back to you as soon as possible.
            </Text>
            <Button 
              onClick={() => setStatus("")} 
              variant="secondary"
              label="Send Another Message"
            />
          </Flex>
        ) : (
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="m" fillWidth>
              <Flex gap="m" fillWidth mobileDirection="column">
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Flex>
              
              <Input
                id="subject"
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              
              <Textarea
                id="message"
                name="message"
                label="Message"
                lines={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              
              {status === "error" && (
                <Text variant="body-default-s" onBackground="danger-weak">
                  Failed to send your message. Please try again.
                </Text>
              )}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                label={isSubmitting ? "Sending..." : "Send Message"}
                prefixIcon={isSubmitting ? "loading" : "send"}
              />
            </Flex>
          </form>
        )}
      </Flex>
      
      {/* Alternative Contact Methods */}
      <Flex direction="column" gap="m" marginY="xl">
        <Flex gap="m" fillWidth></Flex>
        <Heading variant="display-strong-s">Other Ways to Connect</Heading>
        
        <Flex gap="m" wrap marginTop="m">
          {social.map((item) => 
            item.link && (
              <Button
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                prefixIcon={item.icon}
                label={item.name}
              />
            )
          )}
        </Flex>
      </Flex>
    </>
  );
} 