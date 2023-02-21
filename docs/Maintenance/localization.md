# Updating localization

Localization is done through the system provided by the Text library. However, python scripts are used to convert to and from the json format to a spreadsheet.

To update localization:

1. Download the google sheet
2. Run generate_epip_localization_json.py to update the current localization with data from the sheet
3. Generate new json with new/modified strings via !generatelocalizationtemplates command
4. Run generate_epip_localization_sheets.py to update the sheet
5. Update the google sheet

The repository only contains the core scripts to do this, the particular ones mentioned before (which run the core script for each language in Epip) can be obtained from unpacking (or asking Pip if they're still alive).