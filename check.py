import json

# Load the JSON data from file
with open('public/data/TNEA/tnea_data.json', 'r') as file:
    data = json.load(file)

# Create a set to store unique institute IDs
unique_institutes = set()

# Create a dictionary to map institute IDs to institute names
institute_names = {}

# Process the JSON data
for entry in data:
    institute_id = entry["Institute ID"]
    institute_name = entry["Institute"]
    
    # Add the institute ID to the set
    unique_institutes.add(institute_id)
    
    # Map the institute ID to the name
    institute_names[institute_id] = institute_name

# Display the number of distinct institutes
print(f"Number of distinct institutes: {len(unique_institutes)}")

# Display the institute names
print("Institutes:")
for institute_id in unique_institutes:
    print(f"{institute_id}: {institute_names[institute_id]}")
