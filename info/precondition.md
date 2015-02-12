**Precondition:**
```python
3 <= len(matrix) <= 10
matrix[0][0] == 0
all(len(row) == len(matrix[0]) for row in matrix)
all(matrix[i][j] == matrix[j][i] for i in range(len(matrix)) for j in range(len(matrix)))
all(0 < matrix[i][i] < 10 for i in range(1, len(matrix)))
all(0 <= matrix[i][j] <= 1 for i in range(len(matrix)) for j in range(len(matrix)) if i != j)
```