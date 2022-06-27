// Code generated by goctl. DO NOT EDIT!

package model

import (
	"context"
	"database/sql"
	"fmt"
	"strings"
	"time"

	"github.com/zeromicro/go-zero/core/stores/builder"
	"github.com/zeromicro/go-zero/core/stores/cache"
	"github.com/zeromicro/go-zero/core/stores/sqlc"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
	"github.com/zeromicro/go-zero/core/stringx"
)

var (
	amaUsersFieldNames          = builder.RawFieldNames(&AmaUsers{}, true)
	amaUsersRows                = strings.Join(amaUsersFieldNames, ",")
	amaUsersRowsExpectAutoSet   = strings.Join(stringx.Remove(amaUsersFieldNames, "create_time", "update_time"), ",")
	amaUsersRowsWithPlaceHolder = builder.PostgreSqlJoin(stringx.Remove(amaUsersFieldNames, "username", "create_time", "update_time"))

	cachePublicAmaUsersUsernamePrefix = "cache:public:amaUsers:username:"
)

type (
	amaUsersModel interface {
		Insert(ctx context.Context, data *AmaUsers) (sql.Result, error)
		FindOne(ctx context.Context, username string) (*AmaUsers, error)
		Update(ctx context.Context, data *AmaUsers) error
		Delete(ctx context.Context, username string) error
	}

	defaultAmaUsersModel struct {
		sqlc.CachedConn
		table string
	}

	AmaUsers struct {
		Username    string       `db:"username"`
		Password    string       `db:"password"`
		LastLoginAt sql.NullTime `db:"last_login_at"`
		CreatedAt   time.Time    `db:"created_at"`
	}
)

func newAmaUsersModel(conn sqlx.SqlConn, c cache.CacheConf) *defaultAmaUsersModel {
	return &defaultAmaUsersModel{
		CachedConn: sqlc.NewConn(conn, c),
		table:      `"public"."ama_users"`,
	}
}

func (m *defaultAmaUsersModel) Insert(ctx context.Context, data *AmaUsers) (sql.Result, error) {
	publicAmaUsersUsernameKey := fmt.Sprintf("%s%v", cachePublicAmaUsersUsernamePrefix, data.Username)
	ret, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {
		query := fmt.Sprintf("insert into %s (%s) values ($1, $2, $3, $4)", m.table, amaUsersRowsExpectAutoSet)
		return conn.ExecCtx(ctx, query, data.Username, data.Password, data.LastLoginAt, data.CreatedAt)
	}, publicAmaUsersUsernameKey)
	return ret, err
}

func (m *defaultAmaUsersModel) FindOne(ctx context.Context, username string) (*AmaUsers, error) {
	publicAmaUsersUsernameKey := fmt.Sprintf("%s%v", cachePublicAmaUsersUsernamePrefix, username)
	var resp AmaUsers
	err := m.QueryRowCtx(ctx, &resp, publicAmaUsersUsernameKey, func(ctx context.Context, conn sqlx.SqlConn, v interface{}) error {
		query := fmt.Sprintf("select %s from %s where username = $1 limit 1", amaUsersRows, m.table)
		return conn.QueryRowCtx(ctx, v, query, username)
	})
	switch err {
	case nil:
		return &resp, nil
	case sqlc.ErrNotFound:
		return nil, ErrNotFound
	default:
		return nil, err
	}
}

func (m *defaultAmaUsersModel) Update(ctx context.Context, data *AmaUsers) error {
	publicAmaUsersUsernameKey := fmt.Sprintf("%s%v", cachePublicAmaUsersUsernamePrefix, data.Username)
	_, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {
		query := fmt.Sprintf("update %s set %s where username = $1", m.table, amaUsersRowsWithPlaceHolder)
		return conn.ExecCtx(ctx, query, data.Username, data.Password, data.LastLoginAt, data.CreatedAt)
	}, publicAmaUsersUsernameKey)
	return err
}

func (m *defaultAmaUsersModel) Delete(ctx context.Context, username string) error {
	publicAmaUsersUsernameKey := fmt.Sprintf("%s%v", cachePublicAmaUsersUsernamePrefix, username)
	_, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {
		query := fmt.Sprintf("delete from %s where username = $1", m.table)
		return conn.ExecCtx(ctx, query, username)
	}, publicAmaUsersUsernameKey)
	return err
}

func (m *defaultAmaUsersModel) formatPrimary(primary interface{}) string {
	return fmt.Sprintf("%s%v", cachePublicAmaUsersUsernamePrefix, primary)
}

func (m *defaultAmaUsersModel) queryPrimary(ctx context.Context, conn sqlx.SqlConn, v, primary interface{}) error {
	query := fmt.Sprintf("select %s from %s where username = $1 limit 1", amaUsersRows, m.table)
	return conn.QueryRowCtx(ctx, v, query, primary)
}

func (m *defaultAmaUsersModel) tableName() string {
	return m.table
}
