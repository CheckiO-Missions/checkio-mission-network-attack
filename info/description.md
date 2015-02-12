We are given information about the connections in the network and the security level for each computer.
Security level is the time (in minutes) that is required for the virus to capture a machine.
Capture time is not related to the number of infected computers attacking the machine.
Infection start from the 0th computer (which is already infected).
Connections in the network are undirected. Security levels are not equal to zero (except infected).

Information about a network is represented as a matrix NxN size, where  **N** is a number of computers.
If **i**th computer connected with **j**th computer, then `matrix[i][j] == matrix[j][i] == 1`, else 0.
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