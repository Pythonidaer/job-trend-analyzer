import { JobTrend } from '../models/JobTrend.js';
import { Sequelize } from 'sequelize'; // Import Sequelize

// Get job trends with cursor-based pagination
export const getJobTrends = async (req, res) => {
    try {
        // Extract 'lastId' (cursor) and 'limit' (number of items to fetch) from query parameters.
        // 'limit' defaults to 3 if not provided.
        const { lastId, limit = 3 } = req.query;

        let whereClause = {}; // Initialize where clause for database query

        // If 'lastId' (cursor) is provided, add a WHERE clause to fetch records with id greater than the cursor.
        if (lastId) {
            whereClause = {
                id: {
                    [Sequelize.Op.gt]: parseInt(lastId), // Fetch records with id greater than lastId
                },
            };
        }

        // Fetch job trends from the database using Sequelize's findAll method.
        const jobTrends = await JobTrend.findAll({
            where: whereClause, // Apply the WHERE clause (if any)
            limit: parseInt(limit), // Limit the number of results to the specified limit
            order: [['id', 'ASC']], // Ensure consistent ordering by id (ascending)
        });

        // Send the fetched job trends as a JSON response.
        res.json(jobTrends);

    } catch (error) {
        // Handle any errors that occur during the database query or response.
        console.error('Error fetching job trends:', error);
        res.status(500).json({
            message: 'Failed to fetch job trends',
            error: error.message,
        });
    }
};

// Explanation of Pagination Choices:

// Why Cursor-Based Pagination Was Chosen:

// 1. Performance and Scalability:
//    - Cursor-based pagination is more efficient for large datasets compared to offset-based pagination.
//    - It avoids the performance degradation that occurs with increasing offsets in offset-based pagination.
//    - This is crucial for applications with potentially large datasets and many users.

// 2. Consistent Results:
//    - Cursor-based pagination provides consistent results even when data is frequently added or removed.
//    - It prevents the "skipping" or "duplication" issues that can occur with offset-based pagination.

// 3. Memory Efficiency:
//    - It loads only the needed data from the database, preventing excessive memory usage on the server.
//    - This is especially important for applications running on servers with limited RAM (e.g., 512 MB).

// Why Offset-Based Pagination Was Not Chosen:

// 1. Performance Issues at Scale:
//    - Offset-based pagination becomes inefficient for large datasets due to the database needing to scan through all preceding records.

// 2. Inconsistent Results:
//    - Frequent data changes can lead to inconsistent results (skipping or duplicating records).

// 3. Not Ideal for Infinite Scroll:
//    - Offset-based pagination is better suited for traditional page-based navigation, not infinite scroll.

// Why the Two-Pointer Pattern Was Not Chosen:

// 1. In-Memory Operation:
//    - The Two-Pointer pattern operates on in-memory data structures (arrays, linked lists).
//    - Database pagination deals with data stored on disk, not in memory.

// 2. Database Optimization:
//    - Databases are optimized for data retrieval. Cursor-based pagination leverages these optimizations.
//    - The Two-Pointer pattern would not be able to use these optimizations.

// 3. Memory Limitations:
//    - Loading large datasets into memory for the Two-Pointer pattern would consume excessive RAM.
//    - This is not feasible for applications with limited server resources.

// Variable Name Change:

// 'pageSize' was changed to 'limit' to better reflect its purpose in cursor-based pagination.
// In this context, 'limit' represents the number of items to fetch, not a traditional page size.
// This is more appropriate for sequential navigation akin to infinite scroll.