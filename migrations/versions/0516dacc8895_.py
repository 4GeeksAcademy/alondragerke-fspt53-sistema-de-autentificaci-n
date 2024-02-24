"""empty message

Revision ID: 0516dacc8895
Revises: 53a3027e0f44
Create Date: 2024-02-22 16:17:54.434911

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0516dacc8895'
down_revision = '53a3027e0f44'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('firstName', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('lastName', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('birthDate', sa.Date(), nullable=False))
        batch_op.add_column(sa.Column('country', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('username', sa.String(length=50), nullable=False))
        batch_op.create_unique_constraint(None, ['username'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('username')
        batch_op.drop_column('country')
        batch_op.drop_column('birthDate')
        batch_op.drop_column('lastName')
        batch_op.drop_column('firstName')

    # ### end Alembic commands ###
