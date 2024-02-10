import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({ content, onContentChange }) => {
  const handleImageUpload = async (blobInfo) => {
    try {
      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());
      formData.append("upload_preset", "demo_kahaani_studio");
      formData.append("cloud_name", "dhktoeo0l");
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dhktoeo0l/image/upload`;

      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const imageUrl = data.secure_url;

      console.log("Image URL:", imageUrl);

      // Return just the URL as a string
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Return an empty string or handle the error as needed
      return "";
    }
  };
  const handleEditorChange = (content, editor) => {
    // Notify the parent component about the content changes
    onContentChange(content);
  };
  return (
    <>
      <label
        className="mb-3 font-CooperHevitt text-xl text-black"
        htmlFor="title"
      >
        Blog Content Editor
      </label>

      <Editor
        placeholder="Write your blog here..."
        value={content}
        apiKey="lax06vjgqr9gdo7xel72i6hv15e6bqq8cb51riod2j3ae502"
        onEditorChange={handleEditorChange}
        init={{
          width: "100%",
          height: 700,
          plugin_preview_width: 650,
          plugins: [
            "advlist",
            "autolink",
            "link",
            "image",
            "lists",
            "charmap",
            "preview",
            "anchor",
            "pagebreak",
            "searchreplace",
            "wordcount",
            "visualblocks",
            "visualchars",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "emoticons",
            "help",
          ],
          toolbar:
            "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | link image | print preview media fullscreen | " +
            "forecolor backcolor emoticons | help",
          menu: {
            favs: {
              title: "My Favorites",
              items: "code visualaid | searchreplace | emoticons",
            },
          },
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_handler: handleImageUpload,
        }}
      />
    </>
  );
};

export default TextEditor;
