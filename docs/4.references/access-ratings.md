---
sidebar_position: 1
---

# Access Ratings

## Access Rating Explained

One of the ways that Datafi enables you to secure your information is with Access Ratings. With Access Ratings you can have certain tables or fields be selectively visible to different individuals based off their Access Ratings.

Access Ratings are split into three different aspects, **_Confidentiality_**, **_Sensitivity_**, and **_Identity_**. Each aspect has a range of security level labels as seen below, with the values in level 0 being the least sensitive and the 5 being the most sensitive.

| Confidentiality | Accessability   | Identity      | Security Level |
| --------------- | --------------- | ------------- | -------------- |
| Open            | Non Sensitive   | Public        | 0              |
| Limited         | Less Sensitive  | Partners      | 1              |
| Regulated       | Sensitive       | Internal Only | 2              |
| Restricted      | More Sensitive  | Exclusive     | 3              |
| Strict          | Very Sensitive  | Secure        | 4              |
| Secret          | Hyper Sensitive | Private       | 5              |

When a user tries to view the contents of a dataset, the Access Rating for that user's membership Access Rating is compared to the datasets Table and Field Access Rating, if all three aspects of that user's aspect rating does not meet or match the access ratings of a field, then that field is hidden. Rules further modify this to allow the value returned to be altered based on ratings.

### Setting Access Ratings

Access ratings can be set in various places, and default access ratings can also be provided.

For users, Default Access Ratings can be set at a workspace level, an individual level, and an individual user per dataset level (or membership). For Datasets Default Access Ratings are set at workspace, table, and field levels.

The Default workspace user Access Ratings and Dataset Access Ratings can be set under the **Workspace Policies** tab of the administration page.

Individual user Access Ratings can be set under the **User Management** tab of the administration page. (defaults to the workspaces user default access rating)

User membership level Access Rating are set in the Edit Dataset dialog's **Users** tab. (defaults to user's individual user Access Ratings)

Table and field level Access Ratings are set in the **Schema** tab of the Edit Dataset dialog. (Table defaults to Workspaces default dataset Access Rating, and fields default to the table's Access Rating)
