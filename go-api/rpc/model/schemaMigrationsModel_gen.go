// Code generated by goctl. DO NOT EDIT!

package model

import (
	"context"
	"database/sql"
	"fmt"
	"strings"

	"github.com/zeromicro/go-zero/core/stores/builder"
	"github.com/zeromicro/go-zero/core/stores/cache"
	"github.com/zeromicro/go-zero/core/stores/sqlc"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
	"github.com/zeromicro/go-zero/core/stringx"
)

var (
	schemaMigrationsFieldNames          = builder.RawFieldNames(&SchemaMigrations{}, true)
	schemaMigrationsRows                = strings.Join(schemaMigrationsFieldNames, ",")
	schemaMigrationsRowsExpectAutoSet   = strings.Join(stringx.Remove(schemaMigrationsFieldNames, "create_time", "update_time"), ",")
	schemaMigrationsRowsWithPlaceHolder = builder.PostgreSqlJoin(stringx.Remove(schemaMigrationsFieldNames, "version", "create_time", "update_time"))

	cachePublicSchemaMigrationsVersionPrefix = "cache:public:schemaMigrations:version:"
)

type (
	schemaMigrationsModel interface {
		Insert(ctx context.Context, data *SchemaMigrations) (sql.Result, error)
		FindOne(ctx context.Context, version int64) (*SchemaMigrations, error)
		Update(ctx context.Context, data *SchemaMigrations) error
		Delete(ctx context.Context, version int64) error
	}

	defaultSchemaMigrationsModel struct {
		sqlc.CachedConn
		table string
	}

	SchemaMigrations struct {
		Version int64 `db:"version"`
		Dirty   bool  `db:"dirty"`
	}
)

func newSchemaMigrationsModel(conn sqlx.SqlConn, c cache.CacheConf) *defaultSchemaMigrationsModel {
	return &defaultSchemaMigrationsModel{
		CachedConn: sqlc.NewConn(conn, c),
		table:      `"public"."schema_migrations"`,
	}
}

func (m *defaultSchemaMigrationsModel) Insert(ctx context.Context, data *SchemaMigrations) (sql.Result, error) {
	publicSchemaMigrationsVersionKey := fmt.Sprintf("%s%v", cachePublicSchemaMigrationsVersionPrefix, data.Version)
	ret, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {
		query := fmt.Sprintf("insert into %s (%s) values ($1, $2)", m.table, schemaMigrationsRowsExpectAutoSet)
		return conn.ExecCtx(ctx, query, data.Version, data.Dirty)
	}, publicSchemaMigrationsVersionKey)
	return ret, err
}

func (m *defaultSchemaMigrationsModel) FindOne(ctx context.Context, version int64) (*SchemaMigrations, error) {
	publicSchemaMigrationsVersionKey := fmt.Sprintf("%s%v", cachePublicSchemaMigrationsVersionPrefix, version)
	var resp SchemaMigrations
	err := m.QueryRowCtx(ctx, &resp, publicSchemaMigrationsVersionKey, func(ctx context.Context, conn sqlx.SqlConn, v interface{}) error {
		query := fmt.Sprintf("select %s from %s where version = $1 limit 1", schemaMigrationsRows, m.table)
		return conn.QueryRowCtx(ctx, v, query, version)
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

func (m *defaultSchemaMigrationsModel) Update(ctx context.Context, data *SchemaMigrations) error {
	publicSchemaMigrationsVersionKey := fmt.Sprintf("%s%v", cachePublicSchemaMigrationsVersionPrefix, data.Version)
	_, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {
		query := fmt.Sprintf("update %s set %s where version = $1", m.table, schemaMigrationsRowsWithPlaceHolder)
		return conn.ExecCtx(ctx, query, data.Version, data.Dirty)
	}, publicSchemaMigrationsVersionKey)
	return err
}

func (m *defaultSchemaMigrationsModel) Delete(ctx context.Context, version int64) error {
	publicSchemaMigrationsVersionKey := fmt.Sprintf("%s%v", cachePublicSchemaMigrationsVersionPrefix, version)
	_, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {
		query := fmt.Sprintf("delete from %s where version = $1", m.table)
		return conn.ExecCtx(ctx, query, version)
	}, publicSchemaMigrationsVersionKey)
	return err
}

func (m *defaultSchemaMigrationsModel) formatPrimary(primary interface{}) string {
	return fmt.Sprintf("%s%v", cachePublicSchemaMigrationsVersionPrefix, primary)
}

func (m *defaultSchemaMigrationsModel) queryPrimary(ctx context.Context, conn sqlx.SqlConn, v, primary interface{}) error {
	query := fmt.Sprintf("select %s from %s where version = $1 limit 1", schemaMigrationsRows, m.table)
	return conn.QueryRowCtx(ctx, v, query, primary)
}

func (m *defaultSchemaMigrationsModel) tableName() string {
	return m.table
}