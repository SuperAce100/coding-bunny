---
id: 6
title: Getting array-zy with NumPy
number: 6
dueDate: 2024-12-23
---

## Objectives

By the end of this lesson, you will:

1. Understand what NumPy arrays are and how they differ from Python lists.
2. Perform basic operations with NumPy arrays.
3. Learn about broadcasting and explore several key NumPy functions.

---

## Step 1: Understanding NumPy Arrays

NumPy is a Python library for numerical computations. Its core feature is the **array**, a fast and efficient way to store and manipulate large datasets.

### What Are NumPy Arrays?

- Unlike Python lists, NumPy arrays are fixed-size, homogeneous (all elements are the same type), and optimized for mathematical operations.
- Arrays can represent scalars (0D), vectors (1D), matrices (2D), and higher-dimensional data.
- Arrays have a `shape` attribute that tells you how many dimensions it has and how many elements are in each dimension.

Here’s a quick comparison between a Python list and a NumPy array:

```python
import numpy as np

# Python list
list_example = [1, 2, 3]

# NumPy array
array_example = np.array([1, 2, 3])

print("Python List:", list_example)
print("NumPy Array:", array_example)
```

---

## Step 2: Creating Arrays

### 1. Creating Arrays with Predefined Values

This is useful for initializing arrays for machine learning tasks like weight matrices or bias vectors.

```python
import numpy as np

# Create an array of zeros (for weight initialization)
zeros = np.zeros((3, 3))
print("Zeros:", zeros)

# Create an array of ones (for bias initialization)
ones = np.ones((2, 4))
print("Ones:", ones)

# Create an identity matrix
identity = np.eye(3)
print("Identity Matrix:", identity)
```

### 2. Creating Ranges of Values

You can also create arrays of evenly spaced values.

```python
range_array = np.arange(0, 10, 2)  # Start at 0, stop before 10, step by 2
print("Range Array:", range_array)

linspace_array = np.linspace(0, 1, 5)  # 5 values between 0 and 1
print("Linspace Array:", linspace_array)
```

---

## Step 3: Basic Array Operations

### 1. Element-Wise Operations

You can perform element-wise operations on arrays in very little code.

```python
array1 = np.array([1, 2, 3])
array2 = np.array([4, 5, 6])

# element-wise addition, subtraction, multiplication, and division
print("Addition:", array1 + array2)
print("Subtraction:", array1 - array2)
print("Multiplication:", array1 * array2)
print("Division:", array1 / array2)
```

### 2. Broadcasting Operations

Broadcasting allows operations on arrays of different shapes, making it easier to scale computations for batches of data.

```python
# Define an array and a scalar
array = np.array([1, 2, 3])
scalar = 2

# Perform broadcasting operations
print("Array + Scalar:", array + scalar)
print("Array * Scalar:", array * scalar)
```

---

## Step 4: Common NumPy Functions

### 1. Reshaping Arrays

Reshaping means changing the shape of an array. This is useful when you want to change the dimensions of your data when passing it to a function or model.

```python
# Reshape a 1D array into a 2D array
array = np.array([1, 2, 3, 4, 5, 6])
reshaped = array.reshape((2, 3))
print("Original Array:", array)
print("Reshaped Array:", reshaped)
```

### 2. Aggregation Functions

```python
# Define an array
array = np.array([1, 2, 3, 4, 5])

# Calculate sum, mean, and max
print("Sum:", array.sum())
print("Mean:", array.mean())
print("Max:", array.max())
```

### 3. Matrix Multiplication

Matrix multiplication is pretty useful, especially in machine learning. Numpy has a `dot` function that performs matrix multiplication quickly and easily.

```python
# Define two matrices
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])

# Perform matrix multiplication
result = np.dot(matrix1, matrix2)
print("Matrix Multiplication Result:", result)
```

### 4. Normalization

Normalization scales data to a specific range, a common preprocessing step in ML.

```python
# Define an array
array = np.array([10, 20, 30, 40, 50])

# Normalize to range [0, 1]
normalized = (array - array.min()) / (array.max() - array.min())
print("Original Array:", array)
print("Normalized Array:", normalized)
```

---

## Your Assignment

1. Create a new folder called `numpy-practice` in your `codingbunny` directory.
2. Install NumPy on your system using `pip3 install numpy`.
3. Design a program that uses NumPy to perform a cool operation.
4. Commit and push your code to GitHub!