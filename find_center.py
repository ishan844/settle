import math

pts = [
    (99.23, 112.05), # Bills inner left
    (80.10, 104.32), # Bills inner right
    (107.42, 132.79),# Food inner left
    (99.39, 113.88), # Food inner right
    (50.41, 134.14), # Travel inner left
    (57.85, 153.29), # Travel inner right
]

# We need cx, cy such that these points fall on a circle with radius R.
import numpy as np

# Let's find cx, cy that minimizes variance of distances to these points.
best_cx = 97
best_cy = 131
best_var = 99999

for cx in np.arange(80, 110, 0.1):
    for cy in np.arange(110, 150, 0.1):
        dists = [math.hypot(x-cx, y-cy) for x,y in pts]
        var = np.var(dists)
        if var < best_var:
            best_var = var
            best_cx = cx
            best_cy = cy

print(f"Optimal Center: ({best_cx}, {best_cy})")
print(f"Distances: {[math.hypot(x-best_cx, y-best_cy) for x,y in pts]}")
