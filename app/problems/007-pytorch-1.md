---
id: 7
title: Lighting our (py)torch
number: 7
dueDate: 2024-12-23
---

## Objectives

By the end of this lesson, you will:
1. Install PyTorch on your system.
2. Run a basic PyTorch example to understand its functionality.

---

## Step 1: Installing PyTorch

### 1. Set Up a Virtual Environment
To keep your Python projects organized and avoid global installs (bad practice), it’s a good idea to use a virtual environment. Run the following commands in your terminal:

```bash
# Create a virtual environment in your current directory
python -m venv pytorch_env

# Activate the virtual environment
source pytorch_env/bin/activate
```

Now you’re working inside the virtual environment, and all your Python packages will be installed here.

### 2. Install PyTorch

1. Install PyTorch and related packages:

    ```bash
    pip install torch torchvision torchaudio
    ```

2. Verify that PyTorch can use the Metal backend:

    ```python
    import torch
    print(torch.backends.mps.is_available())
    ```

This should print `True` if PyTorch is using the Metal backend (Apple's GPU), which will speed up the training of your models by around 10x using the power of **parallel processing** (CS149 would be proud).

---

## Step 2: Understanding Tensors

Tensors are the building blocks of PyTorch. They are multi-dimensional arrays similar to NumPy arrays but designed for use in deep learning and optimized for fast computation. The shape of a tensor is the number of dimensions and the size of each dimension, represented as a tuple of integers. Tensors can be:

1. **Scalars**: A single number (0D tensor). Example: `torch.tensor(5)`.
2. **Vectors**: A 1D array of numbers. Example: `[1, 2, 3]`.
3. **Matrices**: A 2D grid of numbers. Example: `[[1, 2], [3, 4]]`.
4. **Higher Dimensions**: Arrays with three or more dimensions, often used for images or video data - a 2D image where we keep track of the R, G, and B values for each pixel could be represented as a 3D tensor of shape `[height, width, 3]`.

Tensors can perform math operations and can even track gradients for optimization in machine learning tasks similar to how we would use NumPy.

---

## Step 3: Using PyTorch

Let’s explore some examples of working with tensors.

### Example 1: Adding Two Tensors

```python
import torch

# Create two tensors
tensor_a = torch.tensor([1, 2, 3])
tensor_b = torch.tensor([4, 5, 6])

# Add the tensors
result = tensor_a + tensor_b

# Print the results
print("Tensor A:", tensor_a)
print("Tensor B:", tensor_b)
print("Result of addition:", result)
```

### Example 2: Reshaping a Tensor

```python
# Create a tensor
tensor = torch.tensor([[1, 2, 3], [4, 5, 6]])

# Reshape the tensor
reshaped_tensor = tensor.view(3, 2)

# Print the results
print("Original Tensor:", tensor)
print("Reshaped Tensor:", reshaped_tensor)
```

### Example 3: Element-Wise Multiplication

```python
# Create two tensors
tensor_a = torch.tensor([1, 2, 3])
tensor_b = torch.tensor([4, 5, 6])

# Element-wise multiplication
result = tensor_a * tensor_b

# Print the results
print("Tensor A:", tensor_a)
print("Tensor B:", tensor_b)
print("Result of multiplication:", result)
```

### Example 4: Calculating Gradients

```python
import torch

# Enable gradients for the tensor
x = torch.tensor(2.0, requires_grad=True)

# Define a simple function y = x^2
y = x ** 2

# Compute the gradient
y.backward()

# Print the gradient (dy/dx)
print("Value of x:", x.item())
print("Value of y:", y.item())
print("Gradient of y with respect to x:", x.grad.item())
```

## Your Assignment

1. Create a new folder called `pytorch-practice` in your `codingbunny` directory.
2. Install PyTorch on your system, setting up a virtual environment using the Metal backend as described above.
3. Run a basic PyTorch example to understand its functionality.
4. Find another basic PyTorch example online and try to implement it.
5. Commit and push your code to GitHub!
