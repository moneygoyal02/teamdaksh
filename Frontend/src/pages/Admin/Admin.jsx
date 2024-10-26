// ImageUpload.js
import { useState } from 'react';
import { Box, Button, HStack, Input, Spinner, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      toast({
        title: 'No file selected',
        description: 'Please select an image file to upload.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('image', file); // Make sure 'image' matches the field name in multer setup

    setIsLoading(true);
    try {
        const response = await axios.post('http://localhost:3000/images/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          timeout: 30000, // Set a timeout for this request (in milliseconds)
        });
        // ... handle response
        toast({
            title: 'Upload Successful',
            description: 'Image uploaded successfully.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        setIsLoading(false);
        setFile(null);
      } catch (error) {
        if (error.code === 'ECONNABORTED') {
          // Handle timeout error
          toast({
            title: 'Request Timed Out',
            description: 'The request took too long to respond.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        } else {
          // Handle other errors
          toast({
            title: 'Upload Failed',
            description: error.response ? error.response.data.error : 'Something went wrong',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        }
      }
    };

  return (
    <HStack bg="black" h="100vh" w="100%">
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={6}
      shadow="md"
      bg="gray.800"
      color="white"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Upload an Image
      </Text>
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        mb={4}
        cursor="pointer"
        isDisabled={isLoading}
      />
      <Button
        colorScheme="teal"
        onClick={handleUpload}
        isDisabled={!file || isLoading}
        leftIcon={isLoading ? <Spinner size="sm" /> : null}
      >
        {isLoading ? 'Uploading...' : 'Upload'}
      </Button>
    </Box>
    </HStack>
  );
};

export default ImageUpload;
