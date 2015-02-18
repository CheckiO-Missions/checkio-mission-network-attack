All of the troops in a squad are connected with a local network. 
The Commander regularly inspects these networks for security issues.
He uses a smart and aggressive program which takes control of all the computers on the network.
This program attacks all connected computers simultaneously, then uses the captured computers for further attacks.
We can help him improve his process by modeling and improving his inspections.

We are given information about the connections in the network and the security level for each computer.
The security level is the time (in minutes) that is required for a virus to capture a machine.
Capture time is not related to the number of infected computers attacking the machine.
Infection begins with the 0th computer which was already infected at the start of the test.
Connections in the network are undirected. Security levels are not equal to zero (except for the infected).

Information about a network is represented as a matrix NxN in size, where  **N** is the number of computers.
If the **i**th computer connected with **j**th computer, then `matrix[i][j] == matrix[j][i] == 1`, else 0.
Security levels are placed in the main matrix diagonal, so matrix[i][i] is the security level for the **i**th computer.

![Attack](attack.svg)

You should calculate how much time is required to capture the whole network in minutes.



<div class="for_info_only">
    <p>
        **Example:**
    </p>
    <pre class="brush: python">

    </pre>
</div>

<p class="for_info_only">
    **How it is used: **
    
</p>

<p>
    **Precondition:**
    <pre>

</pre>
</p>
**Input:** Network information as a list of lists with integers. 

**Output:** The total time of taken to capture the network as an integer.

**Example:**

```python
capture([[0, 1, 0, 1, 0, 1],
         [1, 8, 1, 0, 0, 0],
         [0, 1, 2, 0, 0, 1],
         [1, 0, 0, 1, 1, 0],
         [0, 0, 0, 1, 3, 1],
         [1, 0, 1, 0, 1, 2]]) == 8
capture([[0, 1, 0, 1, 0, 1],
         [1, 1, 1, 0, 0, 0],
         [0, 1, 2, 0, 0, 1],
         [1, 0, 0, 1, 1, 0],
         [0, 0, 0, 1, 3, 1],
         [1, 0, 1, 0, 1, 2]]) == 4
capture([[0, 1, 1],
         [1, 9, 1],
         [1, 1, 9]]) == 9
```
**How it is used:**

This concept shows how to model and examine various network configurations, the spread of disease or dissemination of rumors. Given the right inspiration, you could even recreate a well known havking mini game from one of our favorite AAA titles.

**Precondition:**
```python
3 <= len(matrix) <= 10
matrix[0][0] == 0
all(len(row) == len(matrix[0]) for row in matrix)
all(matrix[i][j] == matrix[j][i] for i in range(len(matrix)) for j in range(len(matrix)))
all(0 < matrix[i][i] < 10 for i in range(1, len(matrix)))
all(0 <= matrix[i][j] <= 1 for i in range(len(matrix)) for j in range(len(matrix)) if i != j)
```
